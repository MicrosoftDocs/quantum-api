---
uid: Microsoft.Quantum.Samples.QAOA
title: Microsoft.Quantum.Samples.QAOA namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.QAOA
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.QAOA namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyDriverHamiltonian](xref:Microsoft.Quantum.Samples.QAOA.ApplyDriverHamiltonian) |This operation applies the X-rotation to each qubit. We can think of it as time evolution induced by applying a Hamiltonian that sums over all X rotations.
|[ApplyInstanceHamiltonian](xref:Microsoft.Quantum.Samples.QAOA.ApplyInstanceHamiltonian) |This applies the Z-rotation according to the instance Hamiltonian. We can think of it as Hamiltonian time evolution for time t induced by an Ising Hamiltonian. The Ising Hamiltonian sums over all connected pairs of Pauli-Z operations Z_i and Z_j scaled by a factor J_ij, plus the sum over all Z_i scaled by a factor h_i.
|[PerformQAOA](xref:Microsoft.Quantum.Samples.QAOA.PerformQAOA) |Perform the QAOA algorithm for this Ising Hamiltonian
|[RunQAOATrials](xref:Microsoft.Quantum.Samples.QAOA.RunQAOATrials) |Run QAOA for a given number of trials on 6 qubits. This sample is based on the Traveling Santa Problem outlined here: http://quantumalgorithmzoo.org/traveling_santa/. Reports on the best itinerary for the Traveling Santa Problem and how many of the runs resulted in the answer. This should typically return the optimal solution roughly 71% of the time.

## Functions

| Name | Summary |
|------|---------|
|[CalculatedCost](xref:Microsoft.Quantum.Samples.QAOA.CalculatedCost) |Calculate the total cost for the given result.
|[HamiltonianCouplings](xref:Microsoft.Quantum.Samples.QAOA.HamiltonianCouplings) |Calculate Hamiltonian coupling parameters based on the given penalty.
|[HamiltonianWeights](xref:Microsoft.Quantum.Samples.QAOA.HamiltonianWeights) |Calculate Hamiltonian parameters based on the given costs and penalty.
|[IsSatisfactory](xref:Microsoft.Quantum.Samples.QAOA.IsSatisfactory) |Final check to determine if the used segments satisfy our known constraints. This function is implemented to consider a graph with 6 segments and three valid connected paths.

<!-- /summaries -->
