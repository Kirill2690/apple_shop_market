import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"

export const BurgerIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#71717A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            fill="#FFF"
            d="M3 4h18M3 12h18M3 20h18"
        />
    </Svg>
)
