import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import {styles} from './styles'
function Index() {
    const {t, i18n} = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const lang = i18n.language;
    return (
       <View style={styles.content}>
            {open &&
                <View style={styles.dropdown}>
                    <TouchableOpacity 
                        onPress={
                            ()=> [
                                i18next.changeLanguage('es'),
                                setOpen(!open)
                            ]
                        } 
                        style={styles.dropdownItem}
                    >
                        <Image 
                            style={styles.iconsSmall}
                            source={
                                require('@app/assets/icons/spanish.png')
                            } />
                        <Text>{t('spanish')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={
                            ()=> [
                                i18next.changeLanguage('en'),
                                setOpen(!open)
                            ]
                        }
                        style={styles.dropdownItem}
                    >
                         <Image 
                            style={styles.iconsSmall}
                            source={
                                require('@app/assets/icons/english.png')
                            } />
                        <Text>{t('english')}</Text>
                    </TouchableOpacity>
                </View>
            }

            <TouchableOpacity onPress={()=> {setOpen(!open)}}>
              <Image 
                style={styles.icons}
                source={
                    lang === 'en' ?
                        require('@app/assets/icons/english.png')
                        : 
                        require('@app/assets/icons/spanish.png')
                } />
            </TouchableOpacity>
            
       </View>
    );
}

export default Index;

