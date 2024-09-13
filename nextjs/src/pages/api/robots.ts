import { NextApiRequest, NextApiResponse } from 'next'

export const fetchCache = 'default-no-store'
export const dynamic = 'force-dynamic'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const req = await fetch('https://api.darkvisitors.com/robots-txts', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.NEXT_DARKVISITORS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_types: [
          'AI Assistant',
          'AI Data Scraper',
          'AI Search Crawler',
          'Undocumented AI Agent',
        ],
        disallow: '/',
      }),
    })

    const robotsText = await req.text()
    if (!robotsText) {
      console.debug(robotsText)
      throw new Error('No user agents found in robots.txt')
    }

    res.send(robotsText)
  } catch (error) {
    console.error('Error fetching robots.txt:', error)
    return res.send(getFallbackRobots())
  }

  function getFallbackRobots() {
    return `
    # Dark Visitors Robots.txt

    # AI Data Scraper
    # https://darkvisitors.com/agents/applebot-extended

    User-agent: Applebot-Extended
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/bytespider

    User-agent: Bytespider
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/ccbot

    User-agent: CCBot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/claudebot

    User-agent: ClaudeBot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/diffbot

    User-agent: Diffbot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/facebookbot

    User-agent: FacebookBot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/google-extended

    User-agent: Google-Extended
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/gptbot

    User-agent: GPTBot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/meta-externalagent

    User-agent: Meta-ExternalAgent
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/omgili

    User-agent: omgili
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/timpibot

    User-agent: Timpibot
    Disallow: /

    # AI Data Scraper
    # https://darkvisitors.com/agents/webzio-extended

    User-agent: Webzio-Extended
    Disallow: /

    # Undocumented AI Agent
    # https://darkvisitors.com/agents/anthropic-ai

    User-agent: anthropic-ai
    Disallow: /

    # Undocumented AI Agent
    # https://darkvisitors.com/agents/claude-web

    User-agent: Claude-Web
    Disallow: /

    # Undocumented AI Agent
    # https://darkvisitors.com/agents/cohere-ai

    User-agent: cohere-ai
    Disallow: /
    `
  }
}
