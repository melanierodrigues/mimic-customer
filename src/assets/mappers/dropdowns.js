/* Mapping dropdowns  */
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

export const regionPayloadMapper = key => {
    const region = {
        0: 'all-regions',
        1: 'americas',
        2: 'emea'
    }

    return region[key]
}