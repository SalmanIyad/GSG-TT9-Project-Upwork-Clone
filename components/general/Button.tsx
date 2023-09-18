import CustomButton from '@mui/joy/Button';

export default function ContinueWith_Button({ content, BgColor }: { content: string; BgColor?: string }) {
  return (
    <CustomButton
      sx={{
        backgroundColor: BgColor || "#14A800", 
        borderRadius: '9999px',
        width: '100%',
        border: BgColor === 'transparent' ? '1px #222222 solid' : '0',
        color: BgColor === 'transparent' ? '#222222' : 'white',
        '&:hover': {
          backgroundColor: BgColor || "#14A800",
        },
        '&:focus': {
          border: '0',
        },
      }}
    >
      {content}
    </CustomButton>
  )
}
