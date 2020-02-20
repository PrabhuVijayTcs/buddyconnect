using System.Collections.Generic;
using System.Linq;

namespace buddy_connect.ExtensionMethods
{
    public static class EnumerableExtensions
    {
        public static bool IsNullOrEmpty<T>(this IEnumerable<T> value)
        {
            return value == null || !value.Any();
        }
    }
}