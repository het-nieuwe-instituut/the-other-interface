import { useEffect } from 'react'
import ApiClient from '@/features/graphql/api'
import { isEmpty } from 'lodash'
import { ImageModuleFragmentFragment } from 'src/generated/graphql'
import { getSpinnerHTML } from '@/features/shared/components/Loading/spinner'

export function useStoriesTooltip() {
    useEffect(() => {
        // cleanup any remaining visible tooltips on unmount
        return () => {
            cleanupTooltips()
        }
    }, [])

    return {
        showTooltip,
        hideTooltip,
        cleanupTooltips,
    }
}

interface TooltipData {
    id: string
    title: string
    shortDescription: string
}

function showTooltip(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: TooltipData) {
    const storyEl = document.getElementById(item.id)
    if (!storyEl) {
        return
    }

    ApiClient?.storyImages({ id: item.id })
        .then(res => {
            const spinnerEl = document.getElementById(`${getElementId(item.id)}-spinner`)

            const components = res?.story.data?.attributes?.components?.filter(c => !isEmpty(c))
            if (!components?.length) {
                spinnerEl?.remove()
                return
            }

            const imgComponent = components[0] as ImageModuleFragmentFragment
            if (!imgComponent.image.data?.attributes?.url) {
                spinnerEl?.remove()
                return
            }

            const imgEl = getTooltipElement(item.id)?.querySelector('img')
            if (!imgEl) {
                spinnerEl?.remove()
                return
            }

            spinnerEl?.remove()
            imgEl.setAttribute('src', imgComponent.image.data.attributes.url)
            imgEl.setAttribute('alt', imgComponent.alt_text || '')
        })
        .catch()

    insertTooltip(item)
    positionAndShowTooltip(e, item)
}

function hideTooltip(item: TooltipData) {
    getTooltipElement(item.id)?.remove()
}

function cleanupTooltips() {
    document.querySelectorAll('[id$="-tooltip"]').forEach(el => el.remove())
}

function insertTooltip(item: TooltipData) {
    const tooltipContainerStyle = `
        height: 100%;
        width: 100%;
        max-width: 325px;
        max-height: 325px;
        display: block;
        position: absolute;
        z-index: 100;
        visibility: hidden;
    `

    const tooltipStyle = `
        width: fit-content;
        max-height: 100%;
        background-color: rgba(255, 255, 255, 0.85);
        padding: 15px;
        border-radius: 5px;
        overflow: hidden;
    `

    const titleStyle = `
        font-family: 'Univers';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 118%;
        color: #001223;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    `

    const descriptionStyle = `
        .description,
        .description-blurred {
            margin-top: 13px;
            font-family: 'Univers';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 135%;
            letter-spacing: -0.01em;
            color: #001223;
        }
        .description-blurred:after {
            content: "";
            position: absolute;
            z-index: 101;
            bottom: 0;
            left: 0;
            border-radius: 5px;
            pointer-events: none;
            width: 100%;
            height: 40px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 73.44%);
            border-radius: 5px;
        }
		.spinner {
			display: flex;
			align-items: center;
			margin: 8px 0;
		}
    `

    const elId = getElementId(item.id)

    const tooltipDiv = document.createElement('div')
    tooltipDiv.setAttribute('id', elId)
    tooltipDiv.setAttribute('style', tooltipContainerStyle)
    tooltipDiv.innerHTML += `
        <div style="${tooltipStyle}">
            <style>${descriptionStyle}</style>
            <p style="${titleStyle}">${item.title}</p>
			${getSpinnerHTML({ id: `${elId}-spinner`, className: 'spinner', size: 20 })}
			<img src="" alt="" style="max-width: 100%; max-height: 200px" />
            ${item.shortDescription ? `<p class="description-blurred">${item.shortDescription}</p>` : ''}
        </div>
    `

    document.body.insertBefore(tooltipDiv, null)
}

function positionAndShowTooltip(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: TooltipData) {
    const tooltipContainerEl = getTooltipElement(item.id)
    const tooltipEl = tooltipContainerEl?.children[0]
    if (!tooltipEl) {
        return
    }

    const bodyRect = document.body.getBoundingClientRect()
    const tooltipRect = tooltipEl.getBoundingClientRect()

    const descriptionEl = tooltipEl.querySelector('.description-blurred')
    if (descriptionEl && tooltipEl.getBoundingClientRect().height < 325) {
        descriptionEl.classList.replace('description-blurred', 'description')
    }

    const left = e.clientX + 5
    const top = e.clientY - tooltipRect.height - 5
    const adjustedLeft = left + tooltipRect.width > bodyRect.width ? bodyRect.width - tooltipRect.width : left
    const adjustedTop = top < 0 ? tooltipRect.height : top

    tooltipContainerEl.style.left = `${adjustedLeft}px`
    tooltipContainerEl.style.top = `${adjustedTop}px`
    tooltipContainerEl.style.visibility = 'visible'
}

function getTooltipElement(itemId: string) {
    return document.getElementById(getElementId(itemId))
}

function getElementId(itemId: string) {
    return `${itemId}-tooltip`
}
