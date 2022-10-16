using System.Runtime.Serialization;

namespace RecommendationService.Exceptions
{
    [Serializable]
    internal class NoBorrowerInThisLenderException : Exception
    {
        public NoBorrowerInThisLenderException()
        {
        }

        public NoBorrowerInThisLenderException(string message) : base(message)
        {
        }

        public NoBorrowerInThisLenderException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NoBorrowerInThisLenderException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
