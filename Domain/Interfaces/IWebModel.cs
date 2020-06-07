using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interfaces
{
    public interface IWebModel
    {
        int Id { get; set; }

        string CreatedBy { get; set; }

        string UpdatedBy { get; set; }

        DateTimeOffset CreatedDate { get; set; }

        DateTimeOffset? UpdatedDate { get; set; }

        bool IsDeleted { get; set; }
    }
}
