import styled from 'styled-components';

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  padding-bottom: 100px;
`

export const Comment = styled.div`
    //width: 100%;
    min-height: 100px;
    display: flex;
  padding: 20px 20px;
  flex-direction: column;
  gap: 15px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props=> props.theme.backgroundColor};
  position: relative;
`

export const Text = styled.h4`
  font-size: ${props=> props.theme.textSizeTextL};
  letter-spacing: 1px;
  font-weight: 700;
  color: ${props => props.theme.accentColor1};
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`
export const Name = styled.p`
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.accentColor1};
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`

export const User = styled.div`

    display: flex;
    gap: 10px;
    align-items: center;
`

export const MainImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap:15px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.accentColor1};
`
export const Input = styled.textarea`
  outline: none;
  border: none;
  min-height: 60px;
  max-width: calc(100% - 40px);
  min-width: -webkit-fill-available;
  max-height: 1200px;
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.accentColor1};
  text-transform: capitalize;
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.backgroundColor};
  &:focus {
    border: none;
  }
  &:focus-visible {
    border: none;
}
`

export const ButtonText = styled.button`
  color: ${props => props.theme.accentColor2};
`

export const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  margin: 20px 20px 10px;
  width: 200px;
  height: 48px;
  border-radius: 20px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.red};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.red2};
  }
`

export const SendButton = styled.button`

  margin: 20px 20px 10px;
  width: 230px;
  height: 40px;
  border-radius: 10px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.accentColor1};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.accentColor2};
  }
`