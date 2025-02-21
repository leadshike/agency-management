import { atom } from 'recoil';

export const campaignListState = atom({
    key: 'CampaignList',
    default: {
        running: [
          { name: "Massachusetts Dental Society", client: "Vaibhav Mewara" },
          { name: "Testing Campaign", client: "" },
          { name: "Mithun C1", client: "" }
        ],
        completed: [
          { name: "Test Campaign", client: "" },
          { name: "Vince Test Campaign", client: "" },
          { name: "Hubspot Event Invite", client: "" },
          { name: "AI Outbound", client: "" }
        ],
        paused: [
          { name: "Tech/Software | 11-50 | UK", client: "" },
          { name: "AI Powered Prospecting", client: "" },
          { name: "Marketing USA", client: "" },
          { name: "Staffing", client: "" }
        ]
    },
});

export const clientListState = atom({
    key: 'ClientList',
    default: [
      {
        name: "Vaibhav Mewara",
        status: "active",
        noCampaigns: 1,
        noEmails: 2,
      }
    ],    
});