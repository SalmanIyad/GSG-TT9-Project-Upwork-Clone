import EditIcon from '@mui/icons-material/Edit';

function ProfileEditableProps({Title, SubTitle} : {Title: string, SubTitle?: string | JSX.Element}) {
  return (
    <div className="w-full border-t-[1px] border-[var(--border-base-color)] hover:bg-gray-200 px-8 py-4 transition-3">
    <div className="flex items-center gap-4">
        <h3 className="!text-sm text-left font-bold">{Title}</h3>
        <EditIcon
        sx={{
            color: '#14a800',
            border: '2px var(--border-base-color) solid',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            padding: '3px'
        }}
        />
    </div>
    {typeof SubTitle === 'string' ? (
        <div className="!text-xs text-left">{SubTitle}</div>
      ) : (
        SubTitle
      )}
    </div>  
  )
}

export default ProfileEditableProps