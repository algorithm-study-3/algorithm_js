def solution(phone_number):
    hide_numbers = '*' * (len(phone_number) - 4)
    back_numbers = phone_number[-4:]
    return f"{hide_numbers}{back_numbers}"