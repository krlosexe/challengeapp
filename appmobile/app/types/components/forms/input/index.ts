export interface PropsIputType {
    label?: string,
    placeholder?: string;
    value: string;
    inputType?: 'default' | 'email';
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
}