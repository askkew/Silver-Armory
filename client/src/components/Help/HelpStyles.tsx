import styled from "@emotion/styled";
import { AiFillQuestionCircle } from 'react-icons/ai';

export const HelpContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
})

export const TempText = styled('h1')({
  color: 'white',
  fontSize: '20px',
  fontWeight: 500,
})

export const AccountText = styled('h1')({
  color: 'white',
  fontSize: '15px',
  fontWeight: 500,
  marginLeft: '10px',
})

export const NameGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
})

export const QuestionMark = styled(AiFillQuestionCircle)({
  color: 'white',
  fontSize: '40px',
  cursor: 'pointer',
})

export const DropdownMenu = styled('div')({
  position: 'absolute',
  top: '60px',
  left: 0,
  backgroundColor: '#fff',
  border: '1px solid black',
  padding: '10px',
});
