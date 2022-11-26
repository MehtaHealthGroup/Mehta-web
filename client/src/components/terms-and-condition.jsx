import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TermsAndConditions() {
  return (
    <Card className="m-5">
      <Card.Header >Terms And Condition</Card.Header>
      <Card.Body>
        <Card.Title className="text-center">Terms And Condition</Card.Title>
        <Card.Text className="align-center m-2 p-3">
            The website www.mehta-health-group.in ("mehta-health-group.in") is operated by Mehta Health Group Seller Services.
            Please read the Conditions of Use document carefully before using the mehta-health-group.in website. 
            By using the mehta-health-group.in website, you signify your agreement to be bound by mehta-health-group's Conditions of Use. 
            We also share information with third-party service providers. For example, we use third-party service providers
            to fulfil orders for products or services, and to deliver packages. 
            For any further details on our security practices please read our Privacy Notice.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TermsAndConditions;