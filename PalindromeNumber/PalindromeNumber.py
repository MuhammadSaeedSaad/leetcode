class Solution:
    def isPalindromeUsingString(self, x: int) -> bool:
        # Negative numbers are not palindromes
        if x < 0:
            return False
        
        # Convert the integer to a string
        str_x = str(x)
        
        # Check if the string is equal to its reverse
        return str_x == str_x[::-1]

    def isPalindromeWithoutString(self, x: int) -> bool:
        # Negative numbers are not palindromes
        if x < 0:
            return False
        
        # Initialize variables to reverse the number
        original = x
        reversed_num = 0
        
        # Reverse the integer
        while x > 0:
            digit = x % 10
            reversed_num = reversed_num * 10 + digit
            x //= 10
        
        # Check if the original number is equal to the reversed number
        return original == reversed_num

    def isPalindrome(self, x: int) -> bool:
            # Negative numbers are not palindromes
            if x < 0:
                return False
            
            div = 1
            while x // div >= 10:
                div *= 10

            while x:
                right = x % 10
                left = x // div

                if left != right: return False

                x = (x % div) // 10
                div = div / 100
            return True
                