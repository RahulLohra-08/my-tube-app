'use client'
import { decrement, increment, incrementByAmount } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import SignUp from "./pages/Signup/page";
import 'semantic-ui-css/semantic.min.css'


const Home = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
       <section>
        <SignUp />
       </section>
       <hr />
       <section>
        {/* <Login /> */}
        {/* <ForgotPassword /> */}
       </section>
    </div>
  );
}

export default Home;