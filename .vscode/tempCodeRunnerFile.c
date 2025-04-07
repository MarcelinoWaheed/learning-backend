#include <stdio.h>
#include <stdbool.h>
bool lucky(int n)
{
    bool f = 1;
    while (n)
    {
        if (n % 10 != 4 && n % 10 != 7)
            f = 0;
        n /= 10;
    }
    return f;
}
int main()
{
    int n;
    scanf("%d", &n);
    bool f = 0;
    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0 && lucky(i))
            f = 1;
    }
    if (f)
    {
        printf("YES");
    }
    else
    {
        printf("NO");
    }
}