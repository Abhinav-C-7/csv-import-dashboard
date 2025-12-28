import Text from "../components/ui/Text";
import Stack from "../components/ui/Stack";
import Box from "../components/ui/Box";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";
const ComponenetShowcase = () => {
  return (
    <Box className="max-w-3xl" padding="md">
      <Stack direction="vertical" gap="lg">
      <Box>
        <Stack alignment="start" direction="vertical">
          <Text variant="title">Title</Text>
          <Text variant="subtitle">Subtitle</Text>
          <Text>Body text</Text>
          <Text variant="muted">Muted text</Text>
        </Stack>
      </Box>

      <Box background="muted">
        <Stack alignment="start" direction="vertical">
          <Text variant="subtitle">Buttons</Text>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </Stack>
      </Box>

      <Box padding="md" border="default" background="muted">
        <Card>
          <Text>Card 1</Text>
        </Card>

        
          <Card >
            <Text>Card 2</Text>
          </Card>
          <Text>Box example</Text>
       
      </Box>

      <Box >
        <Table
          title="Sample Table"
          headers={["Name", "Age"]}
          rows={[
            ["Abhay MP", "88"],
            ["Abhinav C", "23"],
          ]}
        />
      </Box>
      </Stack>
    </Box>
  );
};

export default ComponenetShowcase;
