interface Icon {
    iconName: string;
    iconDark: string;
    iconLight: string;
    clickHandler: () => void;
}

export interface NavBarProps {
    icons: Icon[];
}