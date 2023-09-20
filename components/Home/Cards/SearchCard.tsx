import { Input } from '@mui/joy';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchCard = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Input
        autoFocus={false}
        size="lg"
        sx={{
          fontSize: '1rem',
          border: '2px solid #e4ebe4',
          color: '#001E00',
          paddingRight: 0,
          borderRadius: '10px',
          '&:hover': {
            borderColor: '#cbcecb',
          },
          '& .MuiInput-endDecorator': {
            backgroundColor: '#108a00',
            color: '#fff',
            padding: '0.5rem',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            '&:hover': {
              backgroundColor: '#14a800',
            },
          },
        }}
        placeholder='Search for job'
        endDecorator={<SearchIcon />}
      />
    </Box>
  );
};

export default SearchCard;
