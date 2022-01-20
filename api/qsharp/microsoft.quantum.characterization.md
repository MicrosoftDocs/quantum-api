---
uid: Microsoft.Quantum.Characterization
title: Microsoft.Quantum.Characterization namespace
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Characterization
qsharp.summary: >-
  This namespace contains functions and operations for learning properties of
  quantum states and processes, including tomography and phase estimation.
---

# Microsoft.Quantum.Characterization namespace

This namespace contains functions and operations for learning properties of
quantum states and processes, including tomography and phase estimation.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ContinuousPhaseEstimationIteration](xref:Microsoft.Quantum.Characterization.ContinuousPhaseEstimationIteration) |Performs a single iteration of an iterative (classically-controlled) phase estimation algorithm using arbitrary real powers of a unitary oracle. |
|[DiscretePhaseEstimationIteration](xref:Microsoft.Quantum.Characterization.DiscretePhaseEstimationIteration) |Performs a single iteration of an iterative (classically-controlled) phase estimation algorithm using integer powers of a unitary oracle. |
|[EstimateFrequency](xref:Microsoft.Quantum.Characterization.EstimateFrequency) |Given a preparation and measurement, estimates the frequency with which that measurement succeeds (returns `Zero`) by performing a given number of trials. |
|[EstimateFrequencyA](xref:Microsoft.Quantum.Characterization.EstimateFrequencyA) |Given a preparation that is adjointable and measurement, estimates the frequency with which that measurement succeeds (returns `Zero`) by performing a given number of trials. |
|[EstimateImagOverlapBetweenStates](xref:Microsoft.Quantum.Characterization.EstimateImagOverlapBetweenStates) |Given two operations which each prepare copies of a state, estimates the imaginary part of the overlap between the states prepared by each operation. |
|[EstimateOverlapBetweenStates](xref:Microsoft.Quantum.Characterization.EstimateOverlapBetweenStates) |Given two operations which each prepare copies of a state, estimates the squared overlap between the states prepared by each operation. |
|[EstimateRealOverlapBetweenStates](xref:Microsoft.Quantum.Characterization.EstimateRealOverlapBetweenStates) |Given two operations which each prepare copies of a state, estimates the real part of the overlap between the states prepared by each operation. |
|[MeasureAllZ](xref:Microsoft.Quantum.Characterization.MeasureAllZ) |> [!WARNING] |
|[MeasureIdentity](xref:Microsoft.Quantum.Characterization.MeasureIdentity) |Measures the identity operator on a register of qubits. |
|[QuantumPhaseEstimation](xref:Microsoft.Quantum.Characterization.QuantumPhaseEstimation) |Performs the quantum phase estimation algorithm for a given oracle `U` and `targetState`, reading the phase into a big-endian quantum register. |
|[RobustPhaseEstimation](xref:Microsoft.Quantum.Characterization.RobustPhaseEstimation) |Performs the robust non-iterative quantum phase estimation algorithm for a given oracle `U` and eigenstate, and provides a single real-valued estimate of the phase with variance scaling at the Heisenberg limit. |
|[SingleQubitProcessTomographyMeasurement](xref:Microsoft.Quantum.Characterization.SingleQubitProcessTomographyMeasurement) |Performs a single-qubit process tomography measurement in the Pauli basis, given a particular channel of interest. |


<!-- /summaries -->
