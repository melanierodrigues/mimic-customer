/* Industry - Mapping dropdowns */
export const industryPayloadMapper = key => {
    const industry = {
        0: 'all-industries',
        1: 'business-services',
        2: 'communications-media-internet',
        3: 'financial-services-insurance',
        4: 'government-education',
        5: 'healthcare-life-sciences',
        6: 'information-technology-services',
        7: 'manufacturing',
        8: 'retail-consumer-goods',
        9: 'staffing-employment-services',
        10: 'transportation-hospitality',
        11: 'transportation-logistics'
    }

    return industry[key]
}

export const industryTitleMapper = key => {
    const title = {
        0: "All Industries",
        1: "Business Services",
        2: "Communications, Media & Internet",
        3: "Financial Services & Insurance",
        4: "Government & Education",
        5: "Healthcare & Life Sciences",
        6: "Information Technology & Services",
        7: "Manufacturing",
        8: "Retail & Consumer Goods",
        9: "Staffing & Employment Services",
        10: "Transportation & Hospitality",
        11: "Transportation & Logistics"
    }

    return title[key]
}

/* Integration - Mapping dropdowns */
export const integrationPayloadMapper = key => {
    const integration = {
        0: 'all-integrations',
        1: 'api',
        2: 'custom-crm',
        3: 'freshdesk',
        4: 'help-scout',
        5: 'intercom',
        6: 'kustomer-crm',
        7: 'microsoft-dynamics',
        8: 'salesforce',
        9: 'servicenow',
        10: 'slack',
        11: 'zendesk'
    }

    return integration[key]
}

export const integrationTitleMapper = key => {
    const title = {
        0: "All Integrations",
        1: "API",
        2: "Custom CRM",
        3: "Freshdesk",
        4: "Help Scout",
        5: "Intercom",
        6: "Kustomer CRM",
        7: "Microsoft Dynamics",
        8: "Salesforce",
        9: "ServiceNow",
        10: "Slack",
        11: "Zendesk"
    }

    return title[key]
}


/* Region - Mapping dropdowns */
export const regionPayloadMapper = key => {
    const region = {
        0: 'all-regions',
        1: 'americas',
        2: 'emea'
    }

    return region[key]
}

export const regionTitleMapper = key => {
    const title = {
        0: "All Regions",
        1: "Americas",
        2: "EMEA"
    }

    return title[key]
}