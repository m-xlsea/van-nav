import './index.css'
import {useNavigate} from 'react-router-dom'
import {useCallback, useContext, useEffect} from 'react'
import {GlobalContext} from '../../components/GlobalContext'
import {login as fetchLogin} from '../../utils/api'
import {Button, Form, Input, message} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {getLoginState} from '../../utils'
import axios from 'axios'
import {config} from '../../config'

export interface LoginProps {}
export const Login: React.FC<LoginProps> = (props) => {
    const navigate = useNavigate()
    const {store, setStore} = useContext(GlobalContext)
  const login = useCallback(
    async (username: string, password: string) => {
        const data = await fetchLogin(username, password)
      if (data.success) {
          const {user, token} = data.data
          window.localStorage.setItem('_token', token)
          window.localStorage.setItem('_user', user)
          setStore({...store, user})
        axios.defaults.headers.common = {
            Authorization: token
        }
          message.success('登录成功!')
          navigate('/')
      } else {
          message.error(data.errorMessage ?? '登录失败!')
      }
    },
    [setStore, store]
  )
  useEffect(() => {
      const hasLogin = getLoginState()
    if (hasLogin) {
        navigate('/')
    }
  })
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div
            className="logo"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                fontSize: 26,
                fontWeight: 600
            }}>
              <span style={{fontSize: 26}}>{config.title}</span>
          </div>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{remember: true}}
            onFinish={(values) => {
                login(values.username, values.password)
            }}
              autoComplete="on">
              <Form.Item
                  name="username"
                  rules={[{required: true, message: '请输入用户名'}]}>
                  <Input
                      size="large"
                      prefix={<UserOutlined className="site-form-item-icon"/>}
                      placeholder="用户名"
                  />
            </Form.Item>
              <Form.Item
                  name="password"
                  rules={[{required: true, message: '请输入密码'}]}>
                  <Input
                      size="large"
                      prefix={<LockOutlined className="site-form-item-icon"/>}
                      type="password"
                      placeholder="密码"
                  />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="login-form-button"
                style={{width: '100%', height: '40px', backgroundColor: '#000', fontSize: '16px', fontWeight: 600}}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
