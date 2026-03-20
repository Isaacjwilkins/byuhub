'use client';

export default function DownloadPdfButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-[#002E5D] hover:bg-[#001f3f] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-colors print:hidden flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </button>
  );
}
