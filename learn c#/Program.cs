using System;
using System.Numerics;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;


namespace Hello
{
    internal class Program
    {
        static void Main()
        {
            char c= char.Parse(Console.ReadLine());
            if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U' ) Console.WriteLine("vowel");
            else Console.WriteLine("consonant");
        }
    }
}