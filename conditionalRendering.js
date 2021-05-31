render() {
  const { loadingNow } = this.state;
  return (
    <div
        {loadingNow && (
            return <h1>Loading...</h1>
        )
        }
    </div>
  )
}
