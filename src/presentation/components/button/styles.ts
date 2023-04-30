import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 80%;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

const generateBorder = (
  top: string,
  right: string,
  bottom: string,
  left: string
) => {
  const Border = styled.View`
    background-color: ${({ theme }) => theme.colors.gray0};
    position: absolute;
    ${top && `top: -10px;`}
    ${right && `right: -8px;`}
	  ${bottom && `bottom: -10px;`}
	  ${left && `left: -8px;`}
  `;

  const WidthBorder = styled(Border)`
    width: 1px;
    height: 50%;
  `;

  const HeightBorder = styled(Border)`
    height: 1px;
    width: 105%;
  `;

  return { WidthBorder, HeightBorder };
};

export const BorderTop = generateBorder("-10px", "", "", "").HeightBorder;

export const BorderTopRight = generateBorder(
  "-10px",
  "-8px",
  "",
  ""
).WidthBorder;

export const BorderBottomRight = generateBorder(
  "",
  "-8px",
  "-10px",
  ""
).WidthBorder;

export const BorderBottom = generateBorder("", "", "-10px", "").HeightBorder;

export const BorderTopLeft = generateBorder(
  "-10px",
  "",
  "",
  "-8px"
).WidthBorder;

export const BorderBottomLeft = generateBorder(
  "",
  "",
  "-10px",
  "-8px"
).WidthBorder;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.gray0};
`;
