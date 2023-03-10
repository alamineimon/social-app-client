import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

const ProfileModal =() => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <div className="infoForm">
            <p>Your Info</p>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
export default ProfileModal;