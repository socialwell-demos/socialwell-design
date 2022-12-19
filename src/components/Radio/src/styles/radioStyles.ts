import styled from "styled-components";

enum RadioColors {
  WHITE = "#FFF",
  ACTIVE = "#3182CE",
  HOVER_COLOR = "#2B6CB0",
  BORDER_COLOR = "#E2E8F0",
  DISABLED = "#E2E8F0",
}

export const RadioField = styled.input`
  box-sizing: border-box;

  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${RadioColors.BORDER_COLOR};
  border-radius: 50%;
  background-color: ${RadioColors.WHITE};
  display: grid;
  place-items: center;
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  :hover {
    background-color: ${RadioColors.HOVER_COLOR};
    ::after {
      background-color: ${RadioColors.WHITE};
    }
  }

  :checked {
    background-color: ${RadioColors.ACTIVE};
    ::after {
      background-color: ${RadioColors.WHITE};
    }
  }

  :disabled {
    cursor: not-allowed;
    border: 2px solid ${RadioColors.DISABLED};
    background-color: ${RadioColors.DISABLED};
    :hover {
      ::after {
        background-color: none;
      }
    }
    :checked {
      background-color: ${RadioColors.DISABLED};
      ::after {
        background-color: #718096;
      }
    }
  }
`;
