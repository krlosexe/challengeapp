import React, {ReactNode, useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import {stylesLayout} from './styles';
import {useSelector} from 'react-redux';
import {modeDark} from '@app/redux/slices/modeDark/types';
import {theme} from '@app/redux/slices/theme/types';
import {store, AppStateType} from '@app/redux/store';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import Facebook from '@app/assets/icons/socials/facebook_white.svg';
import Instagram from '@app/assets/icons/socials/instagram_white.svg';

import FacebookBlack from '@app/assets/icons/socials/facebook_black.svg';
import InstagramBlack from '@app/assets/icons/socials/instagram_black.svg';

import LayoutsBlack from '@app/assets/icons/layout_black.svg';
import LayoutsWhite from '@app/assets/icons/layout_white.svg';


interface LayoutProps {
    children: ReactNode;
    backButton?: boolean;
  }
  const Index: React.FC<LayoutProps> = ({ children, backButton = false }) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const {t} = useTranslation();
    const styles   = stylesLayout(); 
    const commonStyles   = stylesCommon(); 

    const {modeDark: darkMode} = useSelector((state: AppStateType) => state.modeDark);
   
    const [openTheme, setOpenTheme] = useState<boolean>(false);


    const changeModeDark = () =>{
      const mode = darkMode === 'dark' ?? false;
      store.dispatch(modeDark(mode ? 'light': 'dark'));
    }
   

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentIcons}>
            <View style={styles.contentIconsSocials}>
                <Margin left={'1%'}/>
                {darkMode === 'light' ? (
                    <FacebookBlack width={30} height={30}/>
                ) : (
                    <Facebook width={30} height={30}/>
                )}
                <Margin left={10}/>
                {darkMode === 'light' ? (
                    <InstagramBlack width={30} height={30}/>
                ) : (
                    <Instagram width={30} height={30}/>
                )}
                <Margin left={10}/>
            </View>

            <View style={styles.contentLang}>
              <View>
                <TouchableOpacity onPress={()=>setOpenTheme(!openTheme)}>
                  {darkMode === 'light' ? (
                      <LayoutsBlack width={30} height={30}/>
                  ) : (
                      <LayoutsWhite width={30} height={30}/>
                  )}
                </TouchableOpacity>

                {openTheme && 
                  <View style={styles.contentChangeTheme}>
                    <TouchableOpacity 
                      style={styles.btnTheme}
                      onPress={()=>store.dispatch(theme('theme1'))}
                    >
                      <Image 
                        style={styles.imagetheme}
                        source={require("@app/assets/themes/theme1.png") } />

                        <Text style={[commonStyles.txt_neutral, styles.textTheme]}>Theme1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>store.dispatch(theme('theme2'))}>
                      <Image 
                        style={styles.imagetheme}
                        source={require("@app/assets/themes/theme2.png") } />
                        <Text style={[commonStyles.txt_neutral, styles.textTheme]}>Theme2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>store.dispatch(theme('theme3'))}>
                      <Image 
                        style={styles.imagetheme}
                        source={require("@app/assets/themes/theme3.png") } />
                        <Text style={[commonStyles.txt_neutral, styles.textTheme]}>Theme3</Text>
                    </TouchableOpacity>

                  </View>
                }


              </View>
              <Margin left={12}/>
              <TouchableOpacity onPress={()=>changeModeDark()}>
                <Image 
                  style={styles.icons}
                  source={
                    darkMode === 'dark' ? 
                      require("@app/assets/icons/darkmode.png")
                      :
                      require("@app/assets/icons/lightMode.png")
                  } />
              </TouchableOpacity>
              <ChangeLang />
            </View>
          </View>
          {children}
        </View>

        {backButton && 
          <View style={styles.backButtonContent}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Text style={[commonStyles.txt_neutral, styles.textBack]}>
                  {t('back')}
                </Text>
            </TouchableOpacity>
          </View>
        }
      </SafeAreaView>
    );
  };

export default Index;