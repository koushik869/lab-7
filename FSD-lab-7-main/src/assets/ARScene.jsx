function ARScene() {
  return (
    <a-scene
      xr-mode-ui="enabled: true"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      {/* 3D Box */}
      <a-box
        id="box"
        position="0 0 -3"
        color="#4CC3D9"
        scale="0.3 0.3 0.3"
      ></a-box>

      {/* Camera */}
      <a-entity camera look-controls></a-entity>
    </a-scene>
  );
}

export default ARScene;