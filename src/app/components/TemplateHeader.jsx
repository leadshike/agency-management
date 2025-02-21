
// src/components/TemplateHeader.js
export default function TemplateHeader() {
    return (
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Hello Shekhar 👋, create reply templates.</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>Template</option>
            </select>
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>All Clients</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            New Template
          </button>
        </div>
      </div>
    );
  }
  