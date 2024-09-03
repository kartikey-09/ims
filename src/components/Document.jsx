import { useState } from "react";
import "../css/document.css";

const Document = () => {
  const initialDocuments = [
    {
      number: "001",
      name: "Document 1",
      description: "Description of Document 1",
      link: "http://example.com/doc1",
      version: "v1.0",
      standard: "ISO 9001",
      department: "Quality Assurance",
    },
    {
      number: "002",
      name: "Document 2",
      description: "Description of Document 2",
      link: "http://example.com/doc2",
      version: "v1.1",
      standard: "ISO 14001",
      department: "Environmental Management",
    },
    {
      number: "003",
      name: "Document 3",
      description: "Description of Document 3",
      link: "http://example.com/doc3",
      version: "v1.2",
      standard: "ISO 27001",
      department: "IT Security",
    },
    {
      number: "004",
      name: "Document 4",
      description: "Description of Document 4",
      link: "http://example.com/doc4",
      version: "v1.3",
      standard: "ISO 50001",
      department: "Energy Management",
    },
    {
      number: "005",
      name: "Document 5",
      description: "Description of Document 5",
      link: "http://example.com/doc5",
      version: "v1.4",
      standard: "ISO 22000",
      department: "Food Safety",
    },
    {
      number: "006",
      name: "Document 6",
      description: "Description of Document 6",
      link: "http://example.com/doc6",
      version: "v1.5",
      standard: "ISO 13485",
      department: "Medical Devices",
    },
    {
      number: "007",
      name: "Document 7",
      description: "Description of Document 7",
      link: "http://example.com/doc7",
      version: "v1.6",
      standard: "ISO 31000",
      department: "Risk Management",
    },
    {
      number: "008",
      name: "Document 8",
      description: "Description of Document 8",
      link: "http://example.com/doc8",
      version: "v1.7",
      standard: "ISO 45001",
      department: "Occupational Health",
    },
    {
      number: "009",
      name: "Document 9",
      description: "Description of Document 9",
      link: "http://example.com/doc9",
      version: "v1.8",
      standard: "ISO 4001",
      department: "Environmental Protection",
    },
    {
      number: "010",
      name: "Document 10",
      description: "Description of Document 10",
      link: "http://example.com/doc10",
      version: "v1.9",
      standard: "ISO 28000",
      department: "Supply Chain Security",
    },
    {
      number: "011",
      name: "Document 11",
      description: "Description of Document 11",
      link: "http://example.com/doc11",
      version: "v2.0",
      standard: "ISO 50002",
      department: "Energy Efficiency",
    },
    {
      number: "012",
      name: "Document 12",
      description: "Description of Document 12",
      link: "http://example.com/doc12",
      version: "v2.1",
      standard: "ISO 10002",
      department: "Customer Satisfaction",
    },
    {
      number: "013",
      name: "Document 13",
      description: "Description of Document 13",
      link: "http://example.com/doc13",
      version: "v2.2",
      standard: "ISO 27002",
      department: "Information Security",
    },
    {
      number: "014",
      name: "Document 14",
      description: "Description of Document 14",
      link: "http://example.com/doc14",
      version: "v2.3",
      standard: "ISO 14064",
      department: "Greenhouse Gases",
    },
    {
      number: "015",
      name: "Document 15",
      description: "Description of Document 15",
      link: "http://example.com/doc15",
      version: "v2.4",
      standard: "ISO 26000",
      department: "Social Responsibility",
    },
    {
      number: "016",
      name: "Document 16",
      description: "Description of Document 16",
      link: "http://example.com/doc16",
      version: "v2.5",
      standard: "ISO 17025",
      department: "Testing and Calibration",
    },
    {
      number: "017",
      name: "Document 17",
      description: "Description of Document 17",
      link: "http://example.com/doc17",
      version: "v2.6",
      standard: "ISO 22301",
      department: "Business Continuity",
    },
    {
      number: "018",
      name: "Document 18",
      description: "Description of Document 18",
      link: "http://example.com/doc18",
      version: "v2.7",
      standard: "ISO 31010",
      department: "Risk Assessment",
    },
    {
      number: "019",
      name: "Document 19",
      description: "Description of Document 19",
      link: "http://example.com/doc19",
      version: "v2.8",
      standard: "ISO 37001",
      department: "Anti-Bribery",
    },
    {
      number: "020",
      name: "Document 20",
      description: "Description of Document 20",
      link: "http://example.com/doc20",
      version: "v2.9",
      standard: "ISO 45002",
      department: "Occupational Health and Safety",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(initialDocuments.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = initialDocuments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="document-list">
      <div className="document-header">
        <div className="header-item">Number</div>
        <div className="header-item">Name</div>
        <div className="header-item">Description</div>
        <div className="header-item">Link</div>
        <div className="header-item">Version</div>
        <div className="header-item">Standard</div>
        <div className="header-item">Department</div>
      </div>
      <div className="document-content">
        {currentDocuments.map((doc, index) => (
          <div key={index} className="document-item">
            <div className="document-field">{doc.number}</div>
            <div className="document-field">{doc.name}</div>
            <div className="document-field">{doc.description}</div>
            <div className="document-field">
              <a href={doc.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
            <div className="document-field">{doc.version}</div>
            <div className="document-field">{doc.standard}</div>
            <div className="document-field">{doc.department}</div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <select
            className="items-per-page"
            onChange={handleItemsPerPageChange}
            value={itemsPerPage}
          >
            <option value={10}>10 items per page</option>
            <option value={20}>20 items per page</option>
            <option value={50}>50 items per page</option>
          </select>
          <button
            className="pagination-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Document;
