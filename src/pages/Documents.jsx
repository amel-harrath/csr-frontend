import React, { useEffect, useState } from 'react';
import DocumentCard from '../components/DocumentCard';
import api from '../api';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get('/documents')
      .then((res) => {
        setDocuments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching documents');
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (id, status) => {
    api
      .patch(`/documents/${id}`, { status })
      .then(() => window.location.reload())
      .catch(console.error);
  };

  const handleDelete = (id) => {
    api
      .delete(`/documents/${id}`)
      .then(() => window.location.reload())
      .catch(console.error);
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Documents</h1>

      <UploadForm />
      {loading ? (
        <p>Loading documents...</p>
      ) : documents.length > 0 ? (
        documents.map((group) => (
          <div key={group.name}>
            <h2>{group.name}</h2>
            {group.Documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ))
      ) : (
        <p>No documents available</p>
      )}

      <hr />
    </div>
  );
};

function UploadForm() {
  const [file, setFileUrl] = useState('');
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [documentTypes, setDocumentTypes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const response = await api.get('/documents/types');
        setDocumentTypes(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des types de documents');
      }
    };
    fetchDocumentTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      file,
      documentType: selectedDocumentType,
      expirationDate: expirationDate,
    };

    try {
      await api.post('/documents', payload);
      window.location.reload();
    } catch (err) {
      setError("Erreur lors de l'ajout du document");
    }
  };

  return (
    <div>
      <h3>Ajouter un document</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="URL du document"
          value={file}
          onChange={(e) => setFileUrl(e.target.value)}
          required
        />
        <select
          value={selectedDocumentType}
          onChange={(e) => setSelectedDocumentType(e.target.value)}
          required
        >
          <option value="">Sélectionner un type de document</option>
          {documentTypes.map((type) => (
            <option key={type.id} value={type.slug}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
export default Documents;
