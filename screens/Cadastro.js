import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
    TextInputCadastro, ContainerInput, ContainerBotao, Logo, TextJaTemConta,
    TextAcessar, ContainerCadastro, ContainerIcone, TextTitleCadastro
} from '../styles/CadastroStyles';
import { ContainerApp } from '../styles/StylesGlobal';
import { Image } from 'react-native';
import Botao from '../components/Botao';
import UserContext from '../contexts/UserContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Cadastro = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [dataNascimento, setDataNascimento] = useState();

    const { handleCadastrar } = useContext(UserContext);
    const navigation = useNavigation();


    const handleCadastro = () => {
        handleCadastrar(nome,email,dataNascimento,senha);
        navigation.navigate('Login')
    };


    return (
        <ContainerApp>
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                extraHeight={100}
                >
                <Logo>
                    <Image style={{ width: 250, height: 180 }}
                        source={require('../assets/logo-no-background.png')} />
                </Logo>
               
                <TextTitleCadastro>Cadastre-se!</TextTitleCadastro>
                <ContainerInput>
                    <ContainerCadastro>
                        <ContainerIcone>
                            <Image style={{ width: 29, height: 29 }}
                                source={require('../assets/icone-usuario.png')} />
                        </ContainerIcone>

                        <TextInputCadastro
                            label={'Nome'}
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                            placeholder='Nome Completo'
                            placeholderTextColor="#808080"
                        />
                    </ContainerCadastro>

                    <ContainerCadastro>

                        <ContainerIcone>
                            <Image style={{ width: 29, height: 29 }}
                                source={require('../assets/icone-email.png')} />
                        </ContainerIcone>

                        <TextInputCadastro
                            label={'E-mail'}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='E-mail'
                            placeholderTextColor="#808080"
                        />
                    </ContainerCadastro>

                    <ContainerCadastro>
                        <ContainerIcone>
                            <Image style={{ width: 25, height: 29, marginLeft: 3 }}
                                source={require('../assets/icone-datanasc.png')} />
                        </ContainerIcone>

                        <TextInputCadastro
                            label={'Data-Nasc'}
                            value={dataNascimento}
                            onChangeText={(text) => setDataNascimento(text)}
                            placeholder='Data de Nascimento'
                            placeholderTextColor="#808080"
                        />
                    </ContainerCadastro>

                    <ContainerCadastro>
                        <ContainerIcone>
                            <Image style={{ width: 29, height: 29 }}
                                source={require('../assets/icone-senha.png')} />
                        </ContainerIcone>
                        <TextInputCadastro
                            label={'senha'}
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={(text) => setSenha(text)}
                            placeholder='Senha'
                            placeholderTextColor="#808080"
                        />
                    </ContainerCadastro>
                </ContainerInput>
                <ContainerBotao>
                    <Botao onPress={handleCadastro} texto={"Cadastrar"} />
                </ContainerBotao>
                <TextJaTemConta>Ja tem uma conta? <TextAcessar onPress={() => navigation.navigate('Login')}>Acessar</TextAcessar></TextJaTemConta>
            </KeyboardAwareScrollView>
        </ContainerApp>
    );
};

export default Cadastro;
