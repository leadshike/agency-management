
// src/components/client/AnalyticsStats.js
export default function AnalyticsStats({ data }) {
    return (
      <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg">
        <div>
          <h3 className="text-gray-600">Reply Rate</h3>
          <p className="text-4xl font-medium">{data.replyRate}%</p>
        </div>
        <div>
          <h3 className="text-gray-600">No of Positive Replies</h3>
          <p className="text-4xl font-medium">{data.positiveReplies}</p>
        </div>
        <div>
          <h3 className="text-gray-600">No of Replies</h3>
          <p className="text-4xl font-medium">{data.totalReplies}</p>
        </div>
        <div>
          <h3 className="text-gray-600">Bounce Rate</h3>
          <p className="text-4xl font-medium">{data.bounceRate}%</p>
        </div>
      </div>
    );
  }