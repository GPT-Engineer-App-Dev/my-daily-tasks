import { useState } from 'react';
import { Box, Button, Input, List, ListItem, ListIcon, IconButton, useToast, Image } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaCheckCircle, FaRegCircle, FaEdit } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (editingId) {
      setTasks(tasks.map(task => task.id === editingId ? { ...task, text: input } : task));
      setEditingId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    }
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const initiateEdit = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setInput(taskToEdit.text);
    setEditingId(id);
  };

  return (
    <Box p={5}>
      <Image src="/images/fabian-hedin.png" alt="Fabian Hedin" boxSize="200px" m="auto" display="block" mb={4} />
      <Input
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="lg"
        mb={4}
      />
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addTask} mb={4}>
        Add Task
      </Button>
      <List spacing={3}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center" justifyContent="space-between">
            <ListIcon
              as={task.isCompleted ? FaCheckCircle : FaRegCircle}
              color={task.isCompleted ? 'green.500' : 'gray.500'}
              cursor="pointer"
              onClick={() => toggleTaskCompletion(task.id)}
            />
            <Box flex="1" as="span" ml={2} textDecoration={task.isCompleted ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton
              icon={<FaEdit />}
              colorScheme="purple"
              onClick={() => initiateEdit(task.id)}
            />
            <IconButton
              icon={<FaTrash />}
              colorScheme="red"
              onClick={() => deleteTask(task.id)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;