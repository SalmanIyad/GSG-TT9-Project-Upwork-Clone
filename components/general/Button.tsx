import CustomButton from '@mui/joy/Button';

export default function ContinueWith_Button({ content, BgColor, icon }: { content: string; BgColor?: string; icon?: JSX.Element }) {
  return (
    <CustomButton
      startDecorator={icon}
      sx={{
        backgroundColor: `${BgColor || "#14A800"} !important`,
        borderRadius: '9999px',
        width: '100%',
        border: BgColor === 'transparent' ? '1px #222222 solid' : '0',
        color: BgColor === 'transparent' ? '#222222' : 'white',
        position: 'relative',
        '&:hover': {
          backgroundColor: `${BgColor || "#14A800"} !important`,
        },
        '&:focus': {
          border: BgColor === 'transparent' ? '1px #222222 solid' : '0',
          backgroundColor: `${BgColor || "#14A800"} !important`,
        },
        '& .googleIcon': {
          position: 'absolute',
          top: '1px',
          left: '1px',
          width: '34px',
          height: '34px',
          background: '#fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .appleIcon': {
          width: '20px',
          height: '20px',
        },
      }}
    >
      {content}
    </CustomButton>
  )
}
