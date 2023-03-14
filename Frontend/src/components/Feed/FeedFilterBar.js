import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, FilterButton } from './FeedFilterBarElements';

function FeedFilterBar({ subscriptions, onToggle }) {
  const [toggledOffIds, setToggledOffIds] = useState([]); // [subId1, subId2, ...]
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDropdown = (isOpen) => {
    setShow(isOpen);
  };

  useEffect(() => {
    onToggle(toggledOffIds);
  }, [toggledOffIds]);

  const handleToggle = (e, subId) => {
    e.stopPropagation();
    if (toggledOffIds.includes(subId)) {
      setToggledOffIds(toggledOffIds.filter((id) => id !== subId));
    } else {
      setToggledOffIds([...toggledOffIds, subId]);
    }
  };

  console.log('toggledOffIds: ', toggledOffIds);

  return (
    <Container>
        <FilterButton variant="secondary">All</FilterButton>
        <FilterButton variant="secondary">Subscription</FilterButton>
        <FilterButton variant="secondary">Video</FilterButton>
        <FilterButton variant="secondary">Podcast</FilterButton>
    </Container>
    /*<Dropdown show={open} onToggle={(show) => setOpen(show)}>
      <DropdownButton
        as={ButtonGroup}
        variant="secondary"
        key="secondary"
        id="filter-dropdown"
        title="Filter  "
        style={{width: "100px"}}
      >
        {subscriptions.map((subscription) => (
          <Dropdown.Item key={subscription.channelId}>
            <Form>
              <Form.Check
                type="switch"
                id={subscription.channelId}
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={subscription.channelAvatar}
                      style={{
                        marginRight: '10px',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                      }}
                    />
                    {subscription.channelName}
                  </div>
                }
                onClick={(e) => handleToggle(e, subscription.channelId)}
              />
            </Form>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>*/
  );
}

export default FeedFilterBar;
