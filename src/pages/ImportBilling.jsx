import Button from "../components/ui/Button";
import Box from "../components/ui/Box";
import Text from "../components/ui/Text";
import Stack from "../components/ui/Stack";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";
import { useRef, useState } from "react";

const ImportBilling = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const parseCSV = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.trim().split("\n");
      const data = lines.map((line) => line.split(","));

      setHeaders(data[0]);
      setRows(data.slice(1));
    };

    reader.readAsText(file);
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    setIsUploading(true);
    parseCSV(file);
    setTimeout(() => {
      setIsUploading(false);
      setUploaded(true);
    }, 1500);
  };

  return (
    <Box padding="lg">
      <Stack gap="lg" alignment="center" direction="vertical">
        <Text variant="title">Import Billing Data</Text>
        <Text>Upload CSV files to import billing or invoice data</Text>

        <Card className="w-[929px] h-[404px] flex  justify-center">
          <Stack gap="lg" alignment="center">
            <Box padding="md">
              <Text variant="body">
                Supported format: CSV files only Maximum file size: 5MB
              </Text>
            </Box>
            <Button onClick={handleSelectFile} variant="secondary">
              <Text variant="body">Select CSV file</Text>
            </Button>
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                const newFile = e.target.files[0];
                if (!newFile) return;

                setFile(newFile);

                setUploaded(false);
                setHeaders([]);
                setRows([]);
                setIsUploading(false);

                e.target.value = null;
              }}
            />
            {file && (
              <Box background="muted" rounded="md" className="mt-4">
                <Text variant="muted">Selected file: {file.name}</Text>
              </Box>
            )}

            {file && !uploaded && (
              <Button
                variant="primary"
                onClick={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Upload CSV"}
              </Button>
            )}

            {uploaded && (
              <Box
                padding="sm"
                background="muted"
                className="flex items-center gap-2 text-green-700"
              >
                <span>✅</span>
                <Text>File uploaded successfully</Text>
              </Box>
            )}
          </Stack>
        </Card>
        {uploaded && (
          <Card className="mt-8 my-10 w-[929px]">
            <Stack gap="md">
              <Text variant="subtitle">{file.name}</Text>
              <Table headers={headers} rows={rows} />
            </Stack>
          </Card>
        )}
      </Stack>
    </Box>
  );
};

export default ImportBilling;
