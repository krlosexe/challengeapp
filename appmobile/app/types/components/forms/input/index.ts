export interface PropsIputType {
    label?: string,
    placeholder?: string;
    value: string;
    inputType?: 'default' | 'email';
    secureTextEntry?: boolean;
    Icon?: any;
    onChangeText: (text: string) => void;
}