#include <bits/stdc++.h>

using namespace std;

#define FAST                     \
    ios::sync_with_stdio(false); \
    cin.tie(NULL);               \
    cout.tie(NULL);
#define endl '\n'
#define nl '\n'
#define nc '\0'
#define ts    \
    int t;    \
    cin >> t; \
    while (t--)
#define fx(a) fixed << setprecision(a)
#define all(a) a.begin(), a.end()
#define allr(a) a.rbegin(), a.rend()
#define gcd(a, b) __gcd(a, b)
#define mod(a, b) (((a % b) + b) % b)
#define Yes cout << "Yes\n"
#define YES cout << "YES\n"
#define No cout << "No\n"
#define NO cout << "NO\n"
#define repp(i, a, b) for (int i = a; i <= b; i++)
#define rep(i, a, b) for (int i = a; i < b; i++)
#define perr(i, a, b) for (int i = a; i >= b; i--)
#define per(i, a, b) for (int i = a; i > b; i--)
typedef long long ll;
typedef unsigned long long ull;
typedef vector<int> vi;
typedef vector<ll> vl;
typedef vector<string> vs;
typedef vector<bool> vb;
const double pi = 3.14159265358979323846;
ll lcm(ll a, ll b)
{
    return (a / gcd(a, b)) * b;
}
bool ispalindrome(string s)
{
    int x = 0, r = s.size() - 1;
    while (x < r)
    {
        if (s[x] != s[r])
            return false;
        x++;
        r--;
    }
    return true;
}
ll factorial(ll n)
{
    ll arr = 1;
    for (int i = 1; i <= n; i++)
    {
        arr *= i;
    }
    return arr;
}
double rad(double x1, double y1, double x2, double y2)
{
    return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 2;
}
bool isbinary(string s)
{
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] != '0' && s[i] != '1')
            return false;
    }
    return true;
}
int countOnes(int num)
{
    int c = 0;
    while (num > 0)
    {
        if (num % 2 == 1)
        {
            c++;
        }
        num = num / 2;
    }
    return c;
}
int countOnesString(string s)
{
    int ans = 0;
    for (char c : s)
    {
        if (c == '1')
        {
            ans++;
        }
    }
    return ans;
}
bool isPrime(int x)
{
    if (x <= 1)
        return 0;
    for (int i = 2; i * i <= x; ++i)
        if (x % i == 0)
            return 0;
    return 1;
}
bool islucky(int n)
{
    int a, x;
    x = n;
    while (x)
    {
        a = x % 10;
        if (a != 7 && a != 4)
            return false;
        x /= 10;
    }
    return true;
}
bool isPowerOfTwo(ll x)
{
    return x > 0 && (x & (x - 1)) == 0;
}
void SENO()
{
    
}
int main()
{
    FAST
    SENO();
    return 0;
}