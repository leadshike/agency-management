// src/components/client/ClientCard.js
export default function ClientCard({ data }) {
    const getProfileBgColor = (name) => {
      switch (name) {
        case 'Dsl Nk':
          return 'bg-[#FCDEA2]';
        case 'Vaibhav Mewara':
          return 'bg-[#A1F0BC]';
        case 'Kshitiz Garg':
          return 'bg-[#D8E6FF]';
        default:
          return 'bg-gray-100';
      }
    };
  
    return (
      <div className="bg-white rounded-xl p-4 shadow-xl hover:border hover:border-gray-400 transition-all w-[280px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#22C55E] text-sm">Active</span>
          <button className="text-[#6B7280] px-1">⋮</button>
        </div>
  
        {/* Profile Image and Name */}
        <div className="flex flex-col items-center mb-5">
          <div className={`w-[72px] h-[72px] rounded-full overflow-hidden mb-3 ${getProfileBgColor(data.name)}`}>
            <img 
              src="/img/profile.png"
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[#1F2937] text-base font-medium">{data.name}</h3>
        </div>
  
        {/* Stats List */}
        <div className="space-y-3">
          {/* Campaigns */}
          <div className="flex items-center">
            <div className="bg-[#F0FDF4] rounded-full px-2 py-0.5 flex items-center">
              <span className="font-medium text-sm mr-1.5">{data.campaigns}</span>
              <span className="text-[#4B5563] text-sm">Campaigns</span>
            </div>
          </div>
  
          {/* Positive Reply Rate */}
          <div>
            <span className="text-[#4B5563] text-sm block">Positive Reply Rate</span>
            <div className="w-full h-[3px] bg-[#F0FDF4] rounded-full mt-1" />
          </div>
  
          {/* Status Numbers */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="block text-[#1F2937] text-lg font-medium">
                {data.syncStatus}
              </span>
              <span className="text-[#4B5563] text-sm">
                Active Sync Status
              </span>
            </div>
            <div>
              <span className="block text-[#1F2937] text-lg font-medium">
                {data.emailAccounts}
              </span>
              <span className="text-[#4B5563] text-sm">
                Email Accounts
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  