import {
    ComponentCoreModuleLayouts,
    EnumComponentcoremodulelayoutsSpacingbottom,
    EnumComponentcoremodulelayoutsSpacingtop,
} from 'src/generated/graphql'

export enum CorrectedEnumComponentcoremodulelayoutsSpacingbottom {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum CorrectedEnumComponentcoremodulelayoutsSpacingtop {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export interface CorrectedComponentCoreModuleLayouts
    extends Omit<ComponentCoreModuleLayouts, 'spacingTop' | 'spacingBottom'> {
    spacingTop: CorrectedEnumComponentcoremodulelayoutsSpacingtop
    spacingBottom: CorrectedEnumComponentcoremodulelayoutsSpacingbottom
}

export function getLayout(layout: ComponentCoreModuleLayouts): CorrectedComponentCoreModuleLayouts {
    const spacingBottom = (layout.spacingBottom ||
        EnumComponentcoremodulelayoutsSpacingbottom.Md) as keyof typeof CorrectedEnumComponentcoremodulelayoutsSpacingbottom
    const correctedSpacingBottom =
        CorrectedEnumComponentcoremodulelayoutsSpacingbottom[spacingBottom] ||
        CorrectedEnumComponentcoremodulelayoutsSpacingbottom.Md

    const spacingTop = (layout.spacingTop ||
        EnumComponentcoremodulelayoutsSpacingtop.Md) as keyof typeof CorrectedEnumComponentcoremodulelayoutsSpacingtop
    const correctedSpacingTop =
        CorrectedEnumComponentcoremodulelayoutsSpacingtop[spacingTop] ||
        CorrectedEnumComponentcoremodulelayoutsSpacingtop.Md

    return {
        ...layout,
        spacingBottom: correctedSpacingBottom,
        spacingTop: correctedSpacingTop,
    }
}
