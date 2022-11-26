import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function privacyPolicy() {
  return (
    <Card className="m-5">
      <Card.Header >Privacy Policy</Card.Header>
      <Card.Body>
        <Card.Title className="text-center">Privacy Policies</Card.Title>
        <Card.Text className="align-center m-2 p-3">
        We know that you care how information about you is used and shared, and 
        we appreciate your trust that we will do so carefully and sensibly. 
        This Privacy Notice describes how Rishi MantraSeller Services and 
        its affiliates including mehta-health-group.in, Inc. (collectively "Mehta Health Group") collect 
        and process your personal information through Rishi Mantra websites, devices, 
        products, services, online marketplace and applications that reference this Privacy Notice.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default privacyPolicy;