import { useEffect, useState } from 'react'
import { getUserById } from '../demo2/utils';

export default function Request() {
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(true);
    getUserById({ id })
      .then((user) => {
        setLoading(false);
        setUser(user)
      })
      .catch(() => {
        setErrorMsg('请求失败');
      });
  }, [id]);

  return (
    <div>
      <div>
        {loading ? 'loading...' : user.name}
      </div>
      {errorMsg ? errorMsg : ''}
      <button onClick={() => setId(Math.random())}>获取其他的人</button>
    </div>
  )
}
