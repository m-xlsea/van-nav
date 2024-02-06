import {useCallback, useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {GlobalContext} from './components/GlobalContext'
import {AuthLayout} from './layout/Auth'
import {Login} from './pages/Login'
import {Catelog} from './pages/Catelog'
import {ApiToken} from './pages/ApiToken'
import {Setting} from './pages/Setting'
import {Tools} from './pages/Tools'
import zhCN from 'antd/lib/locale/zh_CN'
import {MainLayout} from './layout/MainLayout'
import {fetchTools} from './utils/api'
import {ConfigProvider} from 'antd'

function App() {
    const [store, setStore] = useState<any>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //   console.log("欢迎使用 Van Nav 项目")
        //   console.log("项目地址: https://github.com/mereithhh/van-nav")
    }, [])

  const reload = useCallback(async () => {
      setLoading(true)
    try {
        const data = await fetchTools()
        setStore({...store, ...data})
    } catch (err) {
    } finally {
        setLoading(false)
    }
  }, [store, setStore])
  return (
    <ConfigProvider locale={zhCN}>
      <GlobalContext.Provider value={{ store, setStore, reload, loading }}>
        <Router basename="/admin">
          <Routes>
            <Route
              path="/"
              element={
                <AuthLayout>
                  <MainLayout>
                    <Tools />
                  </MainLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/tools"
              element={
                <AuthLayout>
                  <MainLayout>
                    <Tools />
                  </MainLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/tokens"
              element={
                <AuthLayout>
                  <MainLayout>
                    <ApiToken />
                  </MainLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/catelogs"
              element={
                <AuthLayout>
                  <MainLayout>
                    <Catelog />
                  </MainLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <AuthLayout>
                  <MainLayout>
                    <Setting />
                  </MainLayout>
                </AuthLayout>
              }
            />
              <Route
                  path="/login"
                  element={<Login/>}
              />
            <Route
              path="*"
              element={
                <div
                  style={{
                      height: '100vh',
                      width: '100vw',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                  <h1>404</h1>
                </div>
              }
            />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </ConfigProvider>
  )
}

export default App
