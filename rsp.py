
import random
def get_player_choice():
    """
    get_player_choice() -> string
    플레이어가 선택한 거: "바위" or "가위" or '보"
    """
    a = input("당신의 선택은? :")
    while a != ("바위" or "가위" or "보"):
        a = input("당신의 선택은?:")
    return a

def get_computer_choice():
    # c = {1:"바위", 2:"보", 3:"가위"}
    # b = random.randint(0,3)
    # d = c[b]
    # return d
    tu=("바위", "가위", "보")
    computer=random.randint(0,2)
    com=tu[computer]
    return com

def who_wins(player, com):
    if (player=="가위" and com=="보"):
        return "player"
    elif (player=="보" and com=="바위"):
        return "player"
    elif (player=="바위" and com=="가위"):
        return "player"
    elif player==com:
        return "None"
    else:
        return "com"


def play_one():
    while True:
        player=get_player_choice()
        com=get_computer_choice()
        result=who_wins(player, com)

        print(f"플레이어는 : {player} , 컴퓨터는  : {com}")
        if result == "player":
            return 'player'
        elif result == "com":
            return 'com'
        else:
            continue


def check_final_winner(result):
    print(f'플레이어 : {result.count("player")} 승, 컴퓨터 : {result.count("com")} 승')
    if result.count('player')>=2:
        return 'player'
    elif result.count('com')>=2:
        return 'com'
    else:
        return None
    

def play():
    result_list=[]
    while True:
        result_list.append(play_one())
        checked=check_final_winner(result_list)
        if checked=='player':
            print('축하합니다 당신이 이겼어요')
            break
        elif checked=="com":
            print('당신이 졌습니다')
            break
    
    

if __name__ == "__main__":
    play()
    # for i in range(3):
    #     string=get_player_choice()
    #     string=get_computer_choice()
    #     print(string)

    # player=get_player_choice()
    # com=get_computer_choice()
    # result=who_wins(player, com)

    # print("플레이어는" + player)
    # print("컴퓨터는" + com)
    # if result == "player":
    #     print('you win')
    # elif result == "com":
    #     print('you lose')
    # else:
    #     print("draw")