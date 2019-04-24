#include <iostream>

class Account{
    public:
    Account(int init_bal)
    :balance(init_bal)
    {


    }
    public:
    //인스턴스 멤버
    int balance;
};

int main(void){
    Account my_acnt(400);
    //절대로 안됨
    //외부에서 어떤 객체의 데이터를 바꾸는 것->안됨
    //이 객체의 매서드를 통해서만 바꾼다
    my_acnt.balance=-5000;
    return 0;
}

//근데 파이썬은 접근제어가 없음