export const ViewControl = ({isChecked, setShowCompleted, cleanTasks}) => {

   const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?'))
        cleanTasks()
    }


    return (

        <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{""}
        <label>show Tasks Done </label>

        <button onClick={handleDelete}>
            Clear
        </button>

      </div>
    )
}