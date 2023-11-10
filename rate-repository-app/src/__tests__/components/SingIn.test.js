jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  }));
  

import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import FormikTextInput from '../../components/FormikTextInput';
import Text from '../../components/Text';
import { Pressable, View } from 'react-native';
import { validationSchema } from '../../components/SignIn';

const SignIn = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        password: ""
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
            <View>
                <FormikTextInput name='username' placeholder='Username' />
                <FormikTextInput secureTextEntry={true} name='password' placeholder='Password' />
                <Pressable onPress={handleSubmit}>
                    <Text>Sign in</Text>
                </Pressable>
            </View>
        )}
        </Formik>
    )
}

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<SignIn onSubmit={onSubmit}/>);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign in'));


      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1); 
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
        });
      });
    });
  });
});